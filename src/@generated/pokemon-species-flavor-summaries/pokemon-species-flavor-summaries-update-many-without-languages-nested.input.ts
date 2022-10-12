import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesCreateWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-or-connect-without-languages.input';
import { pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-flavor-summaries-upsert-with-where-unique-without-languages.input';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';
import { pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-flavor-summaries-update-with-where-unique-without-languages.input';
import { pokemon_species_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-species-flavor-summaries-update-many-with-where-without-languages.input';
import { pokemon_species_flavor_summariesScalarWhereInput } from './pokemon-species-flavor-summaries-scalar-where.input';

@InputType()
export class pokemon_species_flavor_summariesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_species_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    set?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    disconnect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    delete?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_species_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesScalarWhereInput)
    deleteMany?: Array<pokemon_species_flavor_summariesScalarWhereInput>;
}
