import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesCreateWithoutLanguagesInput } from './location-names-create-without-languages.input';

@InputType()
export class location_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_namesCreateWithoutLanguagesInput)
    create!: location_namesCreateWithoutLanguagesInput;
}
