import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesWhereInput } from '../contest-type-names/contest-type-names-where.input';

@InputType()
export class Contest_type_namesListRelationFilter {

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    every?: contest_type_namesWhereInput;

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    some?: contest_type_namesWhereInput;

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    none?: contest_type_namesWhereInput;
}
