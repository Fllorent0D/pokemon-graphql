import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateWithoutNaturesInput } from './nature-pokeathlon-stats-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput } from './nature-pokeathlon-stats-create-or-connect-without-natures.input';
import { nature_pokeathlon_statsUpsertWithWhereUniqueWithoutNaturesInput } from './nature-pokeathlon-stats-upsert-with-where-unique-without-natures.input';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';
import { nature_pokeathlon_statsUpdateWithWhereUniqueWithoutNaturesInput } from './nature-pokeathlon-stats-update-with-where-unique-without-natures.input';
import { nature_pokeathlon_statsUpdateManyWithWhereWithoutNaturesInput } from './nature-pokeathlon-stats-update-many-with-where-without-natures.input';
import { nature_pokeathlon_statsScalarWhereInput } from './nature-pokeathlon-stats-scalar-where.input';

@InputType()
export class nature_pokeathlon_statsUncheckedUpdateManyWithoutNaturesNestedInput {

    @Field(() => [nature_pokeathlon_statsCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateWithoutNaturesInput)
    create?: Array<nature_pokeathlon_statsCreateWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsUpsertWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpsertWithWhereUniqueWithoutNaturesInput)
    upsert?: Array<nature_pokeathlon_statsUpsertWithWhereUniqueWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    set?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    disconnect?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    delete?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    connect?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsUpdateWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpdateWithWhereUniqueWithoutNaturesInput)
    update?: Array<nature_pokeathlon_statsUpdateWithWhereUniqueWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsUpdateManyWithWhereWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpdateManyWithWhereWithoutNaturesInput)
    updateMany?: Array<nature_pokeathlon_statsUpdateManyWithWhereWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsScalarWhereInput)
    deleteMany?: Array<nature_pokeathlon_statsScalarWhereInput>;
}
