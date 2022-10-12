import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class super_contest_combosWhereInput {

    @Field(() => [super_contest_combosWhereInput], {nullable:true})
    AND?: Array<super_contest_combosWhereInput>;

    @Field(() => [super_contest_combosWhereInput], {nullable:true})
    OR?: Array<super_contest_combosWhereInput>;

    @Field(() => [super_contest_combosWhereInput], {nullable:true})
    NOT?: Array<super_contest_combosWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves_movesTosuper_contest_combos_second_move_id?: MovesRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves_movesTosuper_contest_combos_first_move_id?: MovesRelationFilter;
}
