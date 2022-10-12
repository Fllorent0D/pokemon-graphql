import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { Type } from 'class-transformer';
import { ability_namesUpdateWithoutAbilitiesInput } from './ability-names-update-without-abilities.input';

@InputType()
export class ability_namesUpdateWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;

    @Field(() => ability_namesUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_namesUpdateWithoutAbilitiesInput)
    data!: ability_namesUpdateWithoutAbilitiesInput;
}
