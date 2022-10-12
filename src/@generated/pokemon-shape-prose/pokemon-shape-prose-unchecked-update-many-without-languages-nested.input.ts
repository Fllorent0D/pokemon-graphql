import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateWithoutLanguagesInput } from './pokemon-shape-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-shape-prose-create-or-connect-without-languages.input';
import { pokemon_shape_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-shape-prose-upsert-with-where-unique-without-languages.input';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';
import { pokemon_shape_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-shape-prose-update-with-where-unique-without-languages.input';
import { pokemon_shape_proseUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-shape-prose-update-many-with-where-without-languages.input';
import { pokemon_shape_proseScalarWhereInput } from './pokemon-shape-prose-scalar-where.input';

@InputType()
export class pokemon_shape_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_shape_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_shape_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_shape_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_shape_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    set?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    disconnect?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    delete?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    connect?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_shape_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_shape_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_shape_proseScalarWhereInput)
    deleteMany?: Array<pokemon_shape_proseScalarWhereInput>;
}
