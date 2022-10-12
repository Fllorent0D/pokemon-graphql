import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateWithoutLanguagesInput } from './item-fling-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseCreateOrConnectWithoutLanguagesInput } from './item-fling-effect-prose-create-or-connect-without-languages.input';
import { item_fling_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './item-fling-effect-prose-upsert-with-where-unique-without-languages.input';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';
import { item_fling_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './item-fling-effect-prose-update-with-where-unique-without-languages.input';
import { item_fling_effect_proseUpdateManyWithWhereWithoutLanguagesInput } from './item-fling-effect-prose-update-many-with-where-without-languages.input';
import { item_fling_effect_proseScalarWhereInput } from './item-fling-effect-prose-scalar-where.input';

@InputType()
export class item_fling_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_fling_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateWithoutLanguagesInput)
    create?: Array<item_fling_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_fling_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_fling_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    set?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    disconnect?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    delete?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    connect?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_fling_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_fling_effect_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => item_fling_effect_proseScalarWhereInput)
    deleteMany?: Array<item_fling_effect_proseScalarWhereInput>;
}
