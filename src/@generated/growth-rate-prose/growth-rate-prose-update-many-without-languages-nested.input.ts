import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseCreateWithoutLanguagesInput } from './growth-rate-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateOrConnectWithoutLanguagesInput } from './growth-rate-prose-create-or-connect-without-languages.input';
import { growth_rate_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './growth-rate-prose-upsert-with-where-unique-without-languages.input';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';
import { growth_rate_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './growth-rate-prose-update-with-where-unique-without-languages.input';
import { growth_rate_proseUpdateManyWithWhereWithoutLanguagesInput } from './growth-rate-prose-update-many-with-where-without-languages.input';
import { growth_rate_proseScalarWhereInput } from './growth-rate-prose-scalar-where.input';

@InputType()
export class growth_rate_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [growth_rate_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateWithoutLanguagesInput)
    create?: Array<growth_rate_proseCreateWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<growth_rate_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<growth_rate_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    set?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    disconnect?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    delete?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    connect?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<growth_rate_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<growth_rate_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseScalarWhereInput], {nullable:true})
    @Type(() => growth_rate_proseScalarWhereInput)
    deleteMany?: Array<growth_rate_proseScalarWhereInput>;
}
