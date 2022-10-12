import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesCreateWithoutLanguagesInput } from './item-names-create-without-languages.input';

@InputType()
export class item_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_namesCreateWithoutLanguagesInput)
    create!: item_namesCreateWithoutLanguagesInput;
}
