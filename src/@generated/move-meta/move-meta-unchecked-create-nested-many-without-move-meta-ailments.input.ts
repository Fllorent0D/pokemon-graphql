import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateWithoutMove_meta_ailmentsInput } from './move-meta-create-without-move-meta-ailments.input';
import { Type } from 'class-transformer';
import { move_metaCreateOrConnectWithoutMove_meta_ailmentsInput } from './move-meta-create-or-connect-without-move-meta-ailments.input';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class move_metaUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput {

    @Field(() => [move_metaCreateWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaCreateWithoutMove_meta_ailmentsInput)
    create?: Array<move_metaCreateWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaCreateOrConnectWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaCreateOrConnectWithoutMove_meta_ailmentsInput)
    connectOrCreate?: Array<move_metaCreateOrConnectWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    connect?: Array<move_metaWhereUniqueInput>;
}
