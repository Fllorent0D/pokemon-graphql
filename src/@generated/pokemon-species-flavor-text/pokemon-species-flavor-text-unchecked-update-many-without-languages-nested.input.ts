import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutLanguagesInput } from './pokemon-species-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput } from './pokemon-species-flavor-text-create-or-connect-without-languages.input';
import { pokemon_species_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-flavor-text-upsert-with-where-unique-without-languages.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { pokemon_species_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-flavor-text-update-with-where-unique-without-languages.input';
import { pokemon_species_flavor_textUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-species-flavor-text-update-many-with-where-without-languages.input';
import { pokemon_species_flavor_textScalarWhereInput } from './pokemon-species-flavor-text-scalar-where.input';

@InputType()
export class pokemon_species_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_species_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    set?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    disconnect?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    delete?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_species_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_species_flavor_textUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textScalarWhereInput)
    deleteMany?: Array<pokemon_species_flavor_textScalarWhereInput>;
}
