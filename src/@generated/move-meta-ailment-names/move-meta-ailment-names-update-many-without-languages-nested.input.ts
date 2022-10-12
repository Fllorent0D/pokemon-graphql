import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateWithoutLanguagesInput } from './move-meta-ailment-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput } from './move-meta-ailment-names-create-or-connect-without-languages.input';
import { move_meta_ailment_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './move-meta-ailment-names-upsert-with-where-unique-without-languages.input';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';
import { move_meta_ailment_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './move-meta-ailment-names-update-with-where-unique-without-languages.input';
import { move_meta_ailment_namesUpdateManyWithWhereWithoutLanguagesInput } from './move-meta-ailment-names-update-many-with-where-without-languages.input';
import { move_meta_ailment_namesScalarWhereInput } from './move-meta-ailment-names-scalar-where.input';

@InputType()
export class move_meta_ailment_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_meta_ailment_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateWithoutLanguagesInput)
    create?: Array<move_meta_ailment_namesCreateWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_meta_ailment_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    set?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    disconnect?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    delete?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    connect?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_meta_ailment_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_meta_ailment_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesScalarWhereInput], {nullable:true})
    @Type(() => move_meta_ailment_namesScalarWhereInput)
    deleteMany?: Array<move_meta_ailment_namesScalarWhereInput>;
}
