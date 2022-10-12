import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_flag_mapListRelationFilter } from '../prisma/move-flag-map-list-relation-filter.input';
import { Move_flag_proseListRelationFilter } from '../prisma/move-flag-prose-list-relation-filter.input';

@InputType()
export class move_flagsWhereInput {

    @Field(() => [move_flagsWhereInput], {nullable:true})
    AND?: Array<move_flagsWhereInput>;

    @Field(() => [move_flagsWhereInput], {nullable:true})
    OR?: Array<move_flagsWhereInput>;

    @Field(() => [move_flagsWhereInput], {nullable:true})
    NOT?: Array<move_flagsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_flag_mapListRelationFilter, {nullable:true})
    move_flag_map?: Move_flag_mapListRelationFilter;

    @Field(() => Move_flag_proseListRelationFilter, {nullable:true})
    move_flag_prose?: Move_flag_proseListRelationFilter;
}
