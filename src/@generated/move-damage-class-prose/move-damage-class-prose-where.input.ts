import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_damage_classesRelationFilter } from '../prisma/move-damage-classes-relation-filter.input';

@InputType()
export class move_damage_class_proseWhereInput {

    @Field(() => [move_damage_class_proseWhereInput], {nullable:true})
    AND?: Array<move_damage_class_proseWhereInput>;

    @Field(() => [move_damage_class_proseWhereInput], {nullable:true})
    OR?: Array<move_damage_class_proseWhereInput>;

    @Field(() => [move_damage_class_proseWhereInput], {nullable:true})
    NOT?: Array<move_damage_class_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_damage_class_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_damage_classesRelationFilter, {nullable:true})
    move_damage_classes?: Move_damage_classesRelationFilter;
}
