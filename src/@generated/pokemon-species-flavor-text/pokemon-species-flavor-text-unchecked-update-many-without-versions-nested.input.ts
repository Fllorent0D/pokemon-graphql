import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutVersionsInput } from './pokemon-species-flavor-text-create-without-versions.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput } from './pokemon-species-flavor-text-create-or-connect-without-versions.input';
import { pokemon_species_flavor_textUpsertWithWhereUniqueWithoutVersionsInput } from './pokemon-species-flavor-text-upsert-with-where-unique-without-versions.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { pokemon_species_flavor_textUpdateWithWhereUniqueWithoutVersionsInput } from './pokemon-species-flavor-text-update-with-where-unique-without-versions.input';
import { pokemon_species_flavor_textUpdateManyWithWhereWithoutVersionsInput } from './pokemon-species-flavor-text-update-many-with-where-without-versions.input';
import { pokemon_species_flavor_textScalarWhereInput } from './pokemon-species-flavor-text-scalar-where.input';

@InputType()
export class pokemon_species_flavor_textUncheckedUpdateManyWithoutVersionsNestedInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutVersionsInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textUpsertWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpsertWithWhereUniqueWithoutVersionsInput)
    upsert?: Array<pokemon_species_flavor_textUpsertWithWhereUniqueWithoutVersionsInput>;

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

    @Field(() => [pokemon_species_flavor_textUpdateWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateWithWhereUniqueWithoutVersionsInput)
    update?: Array<pokemon_species_flavor_textUpdateWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textUpdateManyWithWhereWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateManyWithWhereWithoutVersionsInput)
    updateMany?: Array<pokemon_species_flavor_textUpdateManyWithWhereWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textScalarWhereInput)
    deleteMany?: Array<pokemon_species_flavor_textScalarWhereInput>;
}
