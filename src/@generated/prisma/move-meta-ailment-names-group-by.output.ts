import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_meta_ailment_namesCountAggregate } from './move-meta-ailment-names-count-aggregate.output';
import { Move_meta_ailment_namesAvgAggregate } from './move-meta-ailment-names-avg-aggregate.output';
import { Move_meta_ailment_namesSumAggregate } from './move-meta-ailment-names-sum-aggregate.output';
import { Move_meta_ailment_namesMinAggregate } from './move-meta-ailment-names-min-aggregate.output';
import { Move_meta_ailment_namesMaxAggregate } from './move-meta-ailment-names-max-aggregate.output';

@ObjectType()
export class Move_meta_ailment_namesGroupBy {

    @Field(() => Int, {nullable:false})
    move_meta_ailment_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Move_meta_ailment_namesCountAggregate, {nullable:true})
    _count?: Move_meta_ailment_namesCountAggregate;

    @Field(() => Move_meta_ailment_namesAvgAggregate, {nullable:true})
    _avg?: Move_meta_ailment_namesAvgAggregate;

    @Field(() => Move_meta_ailment_namesSumAggregate, {nullable:true})
    _sum?: Move_meta_ailment_namesSumAggregate;

    @Field(() => Move_meta_ailment_namesMinAggregate, {nullable:true})
    _min?: Move_meta_ailment_namesMinAggregate;

    @Field(() => Move_meta_ailment_namesMaxAggregate, {nullable:true})
    _max?: Move_meta_ailment_namesMaxAggregate;
}
