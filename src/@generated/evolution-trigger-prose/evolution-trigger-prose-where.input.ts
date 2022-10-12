import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Evolution_triggersRelationFilter } from '../prisma/evolution-triggers-relation-filter.input';

@InputType()
export class evolution_trigger_proseWhereInput {

    @Field(() => [evolution_trigger_proseWhereInput], {nullable:true})
    AND?: Array<evolution_trigger_proseWhereInput>;

    @Field(() => [evolution_trigger_proseWhereInput], {nullable:true})
    OR?: Array<evolution_trigger_proseWhereInput>;

    @Field(() => [evolution_trigger_proseWhereInput], {nullable:true})
    NOT?: Array<evolution_trigger_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Evolution_triggersRelationFilter, {nullable:true})
    evolution_triggers?: Evolution_triggersRelationFilter;
}
