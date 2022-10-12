import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereInput } from '../version-names/version-names-where.input';

@InputType()
export class Version_namesListRelationFilter {

    @Field(() => version_namesWhereInput, {nullable:true})
    every?: version_namesWhereInput;

    @Field(() => version_namesWhereInput, {nullable:true})
    some?: version_namesWhereInput;

    @Field(() => version_namesWhereInput, {nullable:true})
    none?: version_namesWhereInput;
}
