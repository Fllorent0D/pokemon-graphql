import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesCreateWithoutLanguagesInput } from './pokemon-species-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-species-names-create-or-connect-without-languages.input';
import { pokemon_species_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-names-upsert-with-where-unique-without-languages.input';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { pokemon_species_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-names-update-with-where-unique-without-languages.input';
import { pokemon_species_namesUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-species-names-update-many-with-where-without-languages.input';
import { pokemon_species_namesScalarWhereInput } from './pokemon-species-names-scalar-where.input';

@InputType()
export class pokemon_species_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_species_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_species_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    set?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    disconnect?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    delete?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    connect?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_species_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_species_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_namesScalarWhereInput)
    deleteMany?: Array<pokemon_species_namesScalarWhereInput>;
}
