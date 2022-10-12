import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class pokemon_species_flavor_textScalarWhereInput {

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_species_flavor_textScalarWhereInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_species_flavor_textScalarWhereInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_species_flavor_textScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;
}
