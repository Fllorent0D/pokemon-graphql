import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Egg_groupsRelationFilter } from '../prisma/egg-groups-relation-filter.input';

@InputType()
export class egg_group_proseWhereInput {

    @Field(() => [egg_group_proseWhereInput], {nullable:true})
    AND?: Array<egg_group_proseWhereInput>;

    @Field(() => [egg_group_proseWhereInput], {nullable:true})
    OR?: Array<egg_group_proseWhereInput>;

    @Field(() => [egg_group_proseWhereInput], {nullable:true})
    NOT?: Array<egg_group_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Egg_groupsRelationFilter, {nullable:true})
    egg_groups?: Egg_groupsRelationFilter;
}
