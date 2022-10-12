import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class pokemon_evolutionScalarWhereInput {

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_evolutionScalarWhereInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_evolutionScalarWhereInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_evolutionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trigger_item_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_level?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    location_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    held_item_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    time_of_day?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_happiness?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_beauty?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    relative_physical_stats?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trade_species_id?: IntNullableFilter;
}
