import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Region_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    region_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
