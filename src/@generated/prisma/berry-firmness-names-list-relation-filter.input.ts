import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';

@InputType()
export class Berry_firmness_namesListRelationFilter {

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    every?: berry_firmness_namesWhereInput;

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    some?: berry_firmness_namesWhereInput;

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    none?: berry_firmness_namesWhereInput;
}
