import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Super_contest_effectsRelationFilter } from '../prisma/super-contest-effects-relation-filter.input';

@InputType()
export class super_contest_effect_proseWhereInput {

    @Field(() => [super_contest_effect_proseWhereInput], {nullable:true})
    AND?: Array<super_contest_effect_proseWhereInput>;

    @Field(() => [super_contest_effect_proseWhereInput], {nullable:true})
    OR?: Array<super_contest_effect_proseWhereInput>;

    @Field(() => [super_contest_effect_proseWhereInput], {nullable:true})
    NOT?: Array<super_contest_effect_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    super_contest_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Super_contest_effectsRelationFilter, {nullable:true})
    super_contest_effects?: Super_contest_effectsRelationFilter;
}
