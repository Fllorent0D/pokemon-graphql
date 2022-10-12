import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesCreateWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-or-connect-without-languages.input';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';

@InputType()
export class pokemon_species_flavor_summariesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_species_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;
}
