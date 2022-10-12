import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Super_contest_effect_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    super_contest_effect_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
