import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutColorInput } from './pokemon-species-create-or-connect-without-color.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutColorInput } from './pokemon-species-upsert-with-where-unique-without-color.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutColorInput } from './pokemon-species-update-with-where-unique-without-color.input';
import { pokemon_speciesUpdateManyWithWhereWithoutColorInput } from './pokemon-species-update-many-with-where-without-color.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUncheckedUpdateManyWithoutColorNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutColorInput)
    create?: Array<pokemon_speciesCreateWithoutColorInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutColorInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutColorInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutColorInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    set?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    disconnect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    delete?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutColorInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutColorInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutColorInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutColorInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
