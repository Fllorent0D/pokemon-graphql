import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceCreateWithoutGrowth_ratesInput } from './experience-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { experienceCreateOrConnectWithoutGrowth_ratesInput } from './experience-create-or-connect-without-growth-rates.input';
import { experienceWhereUniqueInput } from './experience-where-unique.input';

@InputType()
export class experienceCreateNestedManyWithoutGrowth_ratesInput {

    @Field(() => [experienceCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceCreateWithoutGrowth_ratesInput)
    create?: Array<experienceCreateWithoutGrowth_ratesInput>;

    @Field(() => [experienceCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => experienceCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<experienceCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [experienceWhereUniqueInput], {nullable:true})
    @Type(() => experienceWhereUniqueInput)
    connect?: Array<experienceWhereUniqueInput>;
}
