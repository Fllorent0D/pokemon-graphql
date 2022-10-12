import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateWithoutLanguagesInput } from './evolution-trigger-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateOrConnectWithoutLanguagesInput } from './evolution-trigger-prose-create-or-connect-without-languages.input';
import { evolution_trigger_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './evolution-trigger-prose-upsert-with-where-unique-without-languages.input';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';
import { evolution_trigger_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './evolution-trigger-prose-update-with-where-unique-without-languages.input';
import { evolution_trigger_proseUpdateManyWithWhereWithoutLanguagesInput } from './evolution-trigger-prose-update-many-with-where-without-languages.input';
import { evolution_trigger_proseScalarWhereInput } from './evolution-trigger-prose-scalar-where.input';

@InputType()
export class evolution_trigger_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [evolution_trigger_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateWithoutLanguagesInput)
    create?: Array<evolution_trigger_proseCreateWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<evolution_trigger_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<evolution_trigger_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    set?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    disconnect?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    delete?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    connect?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<evolution_trigger_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<evolution_trigger_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseScalarWhereInput], {nullable:true})
    @Type(() => evolution_trigger_proseScalarWhereInput)
    deleteMany?: Array<evolution_trigger_proseScalarWhereInput>;
}
