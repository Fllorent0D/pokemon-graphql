import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { Type } from 'class-transformer';
import { ability_namesCreateWithoutAbilitiesInput } from './ability-names-create-without-abilities.input';

@InputType()
export class ability_namesCreateOrConnectWithoutAbilitiesInput {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;

    @Field(() => ability_namesCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_namesCreateWithoutAbilitiesInput)
    create!: ability_namesCreateWithoutAbilitiesInput;
}
