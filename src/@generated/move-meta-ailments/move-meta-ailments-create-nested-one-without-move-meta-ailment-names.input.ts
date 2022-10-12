import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput } from './move-meta-ailments-create-without-move-meta-ailment-names.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateOrConnectWithoutMove_meta_ailment_namesInput } from './move-meta-ailments-create-or-connect-without-move-meta-ailment-names.input';
import { move_meta_ailmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';

@InputType()
export class move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput {

    @Field(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput)
    create?: move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput;

    @Field(() => move_meta_ailmentsCreateOrConnectWithoutMove_meta_ailment_namesInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateOrConnectWithoutMove_meta_ailment_namesInput)
    connectOrCreate?: move_meta_ailmentsCreateOrConnectWithoutMove_meta_ailment_namesInput;

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    connect?: move_meta_ailmentsWhereUniqueInput;
}
