import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseCreateWithoutLanguagesInput } from './pokemon-species-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-species-prose-create-or-connect-without-languages.input';
import { pokemon_species_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-prose-upsert-with-where-unique-without-languages.input';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';
import { pokemon_species_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-species-prose-update-with-where-unique-without-languages.input';
import { pokemon_species_proseUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-species-prose-update-many-with-where-without-languages.input';
import { pokemon_species_proseScalarWhereInput } from './pokemon-species-prose-scalar-where.input';

@InputType()
export class pokemon_species_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_species_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_species_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    set?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    disconnect?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    delete?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    connect?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_species_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_species_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_proseScalarWhereInput)
    deleteMany?: Array<pokemon_species_proseScalarWhereInput>;
}
