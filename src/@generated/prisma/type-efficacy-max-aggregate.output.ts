import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Type_efficacyMaxAggregate {

    @Field(() => Int, {nullable:true})
    damage_type_id?: number;

    @Field(() => Int, {nullable:true})
    target_type_id?: number;

    @Field(() => Int, {nullable:true})
    damage_factor?: number;
}
