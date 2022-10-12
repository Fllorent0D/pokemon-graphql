import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesCreateWithoutLanguagesInput } from './move-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_namesCreateOrConnectWithoutLanguagesInput } from './move-names-create-or-connect-without-languages.input';
import { move_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './move-names-upsert-with-where-unique-without-languages.input';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';
import { move_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './move-names-update-with-where-unique-without-languages.input';
import { move_namesUpdateManyWithWhereWithoutLanguagesInput } from './move-names-update-many-with-where-without-languages.input';
import { move_namesScalarWhereInput } from './move-names-scalar-where.input';

@InputType()
export class move_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesCreateWithoutLanguagesInput)
    create?: Array<move_namesCreateWithoutLanguagesInput>;

    @Field(() => [move_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    set?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    disconnect?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    delete?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    connect?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_namesScalarWhereInput], {nullable:true})
    @Type(() => move_namesScalarWhereInput)
    deleteMany?: Array<move_namesScalarWhereInput>;
}
