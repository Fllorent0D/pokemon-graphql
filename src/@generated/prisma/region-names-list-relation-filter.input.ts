import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesWhereInput } from '../region-names/region-names-where.input';

@InputType()
export class Region_namesListRelationFilter {

    @Field(() => region_namesWhereInput, {nullable:true})
    every?: region_namesWhereInput;

    @Field(() => region_namesWhereInput, {nullable:true})
    some?: region_namesWhereInput;

    @Field(() => region_namesWhereInput, {nullable:true})
    none?: region_namesWhereInput;
}
