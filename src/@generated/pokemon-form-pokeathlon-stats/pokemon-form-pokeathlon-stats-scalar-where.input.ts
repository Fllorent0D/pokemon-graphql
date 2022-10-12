import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_form_pokeathlon_statsScalarWhereInput {

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_form_pokeathlon_statsScalarWhereInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_form_pokeathlon_statsScalarWhereInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_form_pokeathlon_statsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    minimum_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    maximum_stat?: IntFilter;
}
