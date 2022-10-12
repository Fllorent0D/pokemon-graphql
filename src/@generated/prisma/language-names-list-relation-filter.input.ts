import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesWhereInput } from '../language-names/language-names-where.input';

@InputType()
export class Language_namesListRelationFilter {

    @Field(() => language_namesWhereInput, {nullable:true})
    every?: language_namesWhereInput;

    @Field(() => language_namesWhereInput, {nullable:true})
    some?: language_namesWhereInput;

    @Field(() => language_namesWhereInput, {nullable:true})
    none?: language_namesWhereInput;
}
