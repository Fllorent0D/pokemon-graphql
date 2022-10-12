import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { Type } from 'class-transformer';
import { ability_namesCreateWithoutLanguagesInput } from './ability-names-create-without-languages.input';

@InputType()
export class ability_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;

    @Field(() => ability_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_namesCreateWithoutLanguagesInput)
    create!: ability_namesCreateWithoutLanguagesInput;
}
