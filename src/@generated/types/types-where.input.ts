import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Move_damage_classesRelationFilter } from '../prisma/move-damage-classes-relation-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { BerriesListRelationFilter } from '../prisma/berries-list-relation-filter.input';
import { Move_changelogListRelationFilter } from '../prisma/move-changelog-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';
import { Pokemon_typesListRelationFilter } from '../prisma/pokemon-types-list-relation-filter.input';
import { Type_efficacyListRelationFilter } from '../prisma/type-efficacy-list-relation-filter.input';
import { Type_namesListRelationFilter } from '../prisma/type-names-list-relation-filter.input';

@InputType()
export class typesWhereInput {

    @Field(() => [typesWhereInput], {nullable:true})
    AND?: Array<typesWhereInput>;

    @Field(() => [typesWhereInput], {nullable:true})
    OR?: Array<typesWhereInput>;

    @Field(() => [typesWhereInput], {nullable:true})
    NOT?: Array<typesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;

    @Field(() => Move_damage_classesRelationFilter, {nullable:true})
    move_damage_classes?: Move_damage_classesRelationFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: BerriesListRelationFilter;

    @Field(() => Move_changelogListRelationFilter, {nullable:true})
    move_changelog?: Move_changelogListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => Pokemon_typesListRelationFilter, {nullable:true})
    pokemon_types?: Pokemon_typesListRelationFilter;

    @Field(() => Type_efficacyListRelationFilter, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: Type_efficacyListRelationFilter;

    @Field(() => Type_efficacyListRelationFilter, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: Type_efficacyListRelationFilter;

    @Field(() => Type_namesListRelationFilter, {nullable:true})
    type_names?: Type_namesListRelationFilter;
}
