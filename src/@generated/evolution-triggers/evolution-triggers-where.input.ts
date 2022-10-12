import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Evolution_trigger_proseListRelationFilter } from '../prisma/evolution-trigger-prose-list-relation-filter.input';
import { Pokemon_evolutionListRelationFilter } from '../prisma/pokemon-evolution-list-relation-filter.input';

@InputType()
export class evolution_triggersWhereInput {

    @Field(() => [evolution_triggersWhereInput], {nullable:true})
    AND?: Array<evolution_triggersWhereInput>;

    @Field(() => [evolution_triggersWhereInput], {nullable:true})
    OR?: Array<evolution_triggersWhereInput>;

    @Field(() => [evolution_triggersWhereInput], {nullable:true})
    NOT?: Array<evolution_triggersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Evolution_trigger_proseListRelationFilter, {nullable:true})
    evolution_trigger_prose?: Evolution_trigger_proseListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution?: Pokemon_evolutionListRelationFilter;
}
