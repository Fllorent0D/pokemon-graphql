import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_damage_class_proseListRelationFilter } from '../prisma/move-damage-class-prose-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';
import { StatsListRelationFilter } from '../prisma/stats-list-relation-filter.input';
import { TypesListRelationFilter } from '../prisma/types-list-relation-filter.input';

@InputType()
export class move_damage_classesWhereInput {

    @Field(() => [move_damage_classesWhereInput], {nullable:true})
    AND?: Array<move_damage_classesWhereInput>;

    @Field(() => [move_damage_classesWhereInput], {nullable:true})
    OR?: Array<move_damage_classesWhereInput>;

    @Field(() => [move_damage_classesWhereInput], {nullable:true})
    NOT?: Array<move_damage_classesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_damage_class_proseListRelationFilter, {nullable:true})
    move_damage_class_prose?: Move_damage_class_proseListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => StatsListRelationFilter, {nullable:true})
    stats?: StatsListRelationFilter;

    @Field(() => TypesListRelationFilter, {nullable:true})
    types?: TypesListRelationFilter;
}
