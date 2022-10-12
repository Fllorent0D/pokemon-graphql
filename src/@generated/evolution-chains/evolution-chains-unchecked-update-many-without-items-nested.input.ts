import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsCreateWithoutItemsInput } from './evolution-chains-create-without-items.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateOrConnectWithoutItemsInput } from './evolution-chains-create-or-connect-without-items.input';
import { evolution_chainsUpsertWithWhereUniqueWithoutItemsInput } from './evolution-chains-upsert-with-where-unique-without-items.input';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { evolution_chainsUpdateWithWhereUniqueWithoutItemsInput } from './evolution-chains-update-with-where-unique-without-items.input';
import { evolution_chainsUpdateManyWithWhereWithoutItemsInput } from './evolution-chains-update-many-with-where-without-items.input';
import { evolution_chainsScalarWhereInput } from './evolution-chains-scalar-where.input';

@InputType()
export class evolution_chainsUncheckedUpdateManyWithoutItemsNestedInput {

    @Field(() => [evolution_chainsCreateWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsCreateWithoutItemsInput)
    create?: Array<evolution_chainsCreateWithoutItemsInput>;

    @Field(() => [evolution_chainsCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<evolution_chainsCreateOrConnectWithoutItemsInput>;

    @Field(() => [evolution_chainsUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<evolution_chainsUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [evolution_chainsWhereUniqueInput], {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    set?: Array<evolution_chainsWhereUniqueInput>;

    @Field(() => [evolution_chainsWhereUniqueInput], {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    disconnect?: Array<evolution_chainsWhereUniqueInput>;

    @Field(() => [evolution_chainsWhereUniqueInput], {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    delete?: Array<evolution_chainsWhereUniqueInput>;

    @Field(() => [evolution_chainsWhereUniqueInput], {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    connect?: Array<evolution_chainsWhereUniqueInput>;

    @Field(() => [evolution_chainsUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<evolution_chainsUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [evolution_chainsUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<evolution_chainsUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [evolution_chainsScalarWhereInput], {nullable:true})
    @Type(() => evolution_chainsScalarWhereInput)
    deleteMany?: Array<evolution_chainsScalarWhereInput>;
}
