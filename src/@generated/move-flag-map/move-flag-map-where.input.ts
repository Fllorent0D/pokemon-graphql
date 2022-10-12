import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Move_flagsRelationFilter } from '../prisma/move-flags-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class move_flag_mapWhereInput {

    @Field(() => [move_flag_mapWhereInput], {nullable:true})
    AND?: Array<move_flag_mapWhereInput>;

    @Field(() => [move_flag_mapWhereInput], {nullable:true})
    OR?: Array<move_flag_mapWhereInput>;

    @Field(() => [move_flag_mapWhereInput], {nullable:true})
    NOT?: Array<move_flag_mapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: IntFilter;

    @Field(() => Move_flagsRelationFilter, {nullable:true})
    move_flags?: Move_flagsRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;
}
