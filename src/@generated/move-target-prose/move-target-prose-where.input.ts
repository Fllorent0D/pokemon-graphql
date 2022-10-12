import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_targetsRelationFilter } from '../prisma/move-targets-relation-filter.input';

@InputType()
export class move_target_proseWhereInput {

    @Field(() => [move_target_proseWhereInput], {nullable:true})
    AND?: Array<move_target_proseWhereInput>;

    @Field(() => [move_target_proseWhereInput], {nullable:true})
    OR?: Array<move_target_proseWhereInput>;

    @Field(() => [move_target_proseWhereInput], {nullable:true})
    NOT?: Array<move_target_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_target_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_targetsRelationFilter, {nullable:true})
    move_targets?: Move_targetsRelationFilter;
}
