import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_target_proseListRelationFilter } from '../prisma/move-target-prose-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';

@InputType()
export class move_targetsWhereInput {

    @Field(() => [move_targetsWhereInput], {nullable:true})
    AND?: Array<move_targetsWhereInput>;

    @Field(() => [move_targetsWhereInput], {nullable:true})
    OR?: Array<move_targetsWhereInput>;

    @Field(() => [move_targetsWhereInput], {nullable:true})
    NOT?: Array<move_targetsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_target_proseListRelationFilter, {nullable:true})
    move_target_prose?: Move_target_proseListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
