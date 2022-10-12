import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Location_area_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    location_area_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
