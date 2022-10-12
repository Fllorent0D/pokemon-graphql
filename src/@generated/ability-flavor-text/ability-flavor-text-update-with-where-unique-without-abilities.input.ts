import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textUpdateWithoutAbilitiesInput } from './ability-flavor-text-update-without-abilities.input';

@InputType()
export class ability_flavor_textUpdateWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateWithoutAbilitiesInput)
    data!: ability_flavor_textUpdateWithoutAbilitiesInput;
}
