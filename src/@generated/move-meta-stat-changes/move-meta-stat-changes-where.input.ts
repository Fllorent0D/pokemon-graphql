import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StatsRelationFilter } from '../prisma/stats-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class move_meta_stat_changesWhereInput {

    @Field(() => [move_meta_stat_changesWhereInput], {nullable:true})
    AND?: Array<move_meta_stat_changesWhereInput>;

    @Field(() => [move_meta_stat_changesWhereInput], {nullable:true})
    OR?: Array<move_meta_stat_changesWhereInput>;

    @Field(() => [move_meta_stat_changesWhereInput], {nullable:true})
    NOT?: Array<move_meta_stat_changesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    change?: IntFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats?: StatsRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;
}
