import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';
import { Type } from 'class-transformer';
import { region_namesCreateWithoutLanguagesInput } from './region-names-create-without-languages.input';

@InputType()
export class region_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;

    @Field(() => region_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => region_namesCreateWithoutLanguagesInput)
    create!: region_namesCreateWithoutLanguagesInput;
}
