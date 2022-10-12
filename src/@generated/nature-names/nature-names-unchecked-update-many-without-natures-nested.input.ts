import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesCreateWithoutNaturesInput } from './nature-names-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_namesCreateOrConnectWithoutNaturesInput } from './nature-names-create-or-connect-without-natures.input';
import { nature_namesUpsertWithWhereUniqueWithoutNaturesInput } from './nature-names-upsert-with-where-unique-without-natures.input';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { nature_namesUpdateWithWhereUniqueWithoutNaturesInput } from './nature-names-update-with-where-unique-without-natures.input';
import { nature_namesUpdateManyWithWhereWithoutNaturesInput } from './nature-names-update-many-with-where-without-natures.input';
import { nature_namesScalarWhereInput } from './nature-names-scalar-where.input';

@InputType()
export class nature_namesUncheckedUpdateManyWithoutNaturesNestedInput {

    @Field(() => [nature_namesCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesCreateWithoutNaturesInput)
    create?: Array<nature_namesCreateWithoutNaturesInput>;

    @Field(() => [nature_namesCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_namesCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_namesUpsertWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesUpsertWithWhereUniqueWithoutNaturesInput)
    upsert?: Array<nature_namesUpsertWithWhereUniqueWithoutNaturesInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    set?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    disconnect?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    delete?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    connect?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesUpdateWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesUpdateWithWhereUniqueWithoutNaturesInput)
    update?: Array<nature_namesUpdateWithWhereUniqueWithoutNaturesInput>;

    @Field(() => [nature_namesUpdateManyWithWhereWithoutNaturesInput], {nullable:true})
    @Type(() => nature_namesUpdateManyWithWhereWithoutNaturesInput)
    updateMany?: Array<nature_namesUpdateManyWithWhereWithoutNaturesInput>;

    @Field(() => [nature_namesScalarWhereInput], {nullable:true})
    @Type(() => nature_namesScalarWhereInput)
    deleteMany?: Array<nature_namesScalarWhereInput>;
}
