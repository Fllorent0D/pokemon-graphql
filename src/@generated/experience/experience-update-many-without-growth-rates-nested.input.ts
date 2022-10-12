import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceCreateWithoutGrowth_ratesInput } from './experience-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { experienceCreateOrConnectWithoutGrowth_ratesInput } from './experience-create-or-connect-without-growth-rates.input';
import { experienceUpsertWithWhereUniqueWithoutGrowth_ratesInput } from './experience-upsert-with-where-unique-without-growth-rates.input';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { experienceUpdateWithWhereUniqueWithoutGrowth_ratesInput } from './experience-update-with-where-unique-without-growth-rates.input';
import { experienceUpdateManyWithWhereWithoutGrowth_ratesInput } from './experience-update-many-with-where-without-growth-rates.input';
import { experienceScalarWhereInput } from './experience-scalar-where.input';

@InputType()
export class experienceUpdateManyWithoutGrowth_ratesNestedInput {

    @Field(() => [experienceCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceCreateWithoutGrowth_ratesInput)
    create?: Array<experienceCreateWithoutGrowth_ratesInput>;

    @Field(() => [experienceCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<experienceCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [experienceUpsertWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceUpsertWithWhereUniqueWithoutGrowth_ratesInput)
    upsert?: Array<experienceUpsertWithWhereUniqueWithoutGrowth_ratesInput>;

    @Field(() => [experienceWhereUniqueInput], {nullable:true})
    @Type(() => experienceWhereUniqueInput)
    set?: Array<experienceWhereUniqueInput>;

    @Field(() => [experienceWhereUniqueInput], {nullable:true})
    @Type(() => experienceWhereUniqueInput)
    disconnect?: Array<experienceWhereUniqueInput>;

    @Field(() => [experienceWhereUniqueInput], {nullable:true})
    @Type(() => experienceWhereUniqueInput)
    delete?: Array<experienceWhereUniqueInput>;

    @Field(() => [experienceWhereUniqueInput], {nullable:true})
    @Type(() => experienceWhereUniqueInput)
    connect?: Array<experienceWhereUniqueInput>;

    @Field(() => [experienceUpdateWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceUpdateWithWhereUniqueWithoutGrowth_ratesInput)
    update?: Array<experienceUpdateWithWhereUniqueWithoutGrowth_ratesInput>;

    @Field(() => [experienceUpdateManyWithWhereWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceUpdateManyWithWhereWithoutGrowth_ratesInput)
    updateMany?: Array<experienceUpdateManyWithWhereWithoutGrowth_ratesInput>;

    @Field(() => [experienceScalarWhereInput], {nullable:true})
    @Type(() => experienceScalarWhereInput)
    deleteMany?: Array<experienceScalarWhereInput>;
}
