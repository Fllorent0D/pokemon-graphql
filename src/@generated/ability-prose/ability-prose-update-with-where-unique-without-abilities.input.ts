import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseUpdateWithoutAbilitiesInput } from './ability-prose-update-without-abilities.input';

@InputType()
export class ability_proseUpdateWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_proseUpdateWithoutAbilitiesInput)
    data!: ability_proseUpdateWithoutAbilitiesInput;
}
